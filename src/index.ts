/* eslint-disable linebreak-style */

import { download, json } from "./wrapper";
import { DisTubeError, PlayableExtractorPlugin, Playlist, Song } from "distube";
import type { DisTube, ResolveOptions } from "distube";
import type { YtDlpOptions, YtDlpPlaylist, YtDlpVideo } from "./type";
import ytpl from "@distube/ytpl";

const isPlaylist = (i: any): i is YtDlpPlaylist => Array.isArray(i.entries);

export class YtDlpPlugin extends PlayableExtractorPlugin {
  cookies?: string;
  cookiesFromBrowser?: string | "chrome" | "chromium" | "firefox";
  format?: string;
  constructor({ update, cookies, cookiesFromBrowser, format }: YtDlpOptions = {}) {
    super();
    this.cookies = cookies;
    this.cookiesFromBrowser = cookiesFromBrowser;
    this.format = format;
    if (update ?? true) download().catch(() => undefined);
  }

  override init(distube: DisTube) {
    super.init(distube);
    if (this.distube.plugins[this.distube.plugins.length - 1] !== this) {
      // eslint-disable-next-line no-console
      console.warn(
        `[${this.constructor.name}] This plugin is not the last plugin in distube. This is not recommended.`,
      );
    }
  }

  validate() {
    return true;
  }

  async resolve<T>(url: string, options: ResolveOptions<T>) {
    let info;
    if (ytpl.validateID(url)) {
      info = await json(url, {
        concurrentFragments: 10,
        dumpSingleJson: true,
        extractAudio: true,
        format: this.format ?? "ba/ba*",
        markWatched: true,
        noWarnings: true,
        preferFreeFormats: true,
        skipDownload: true,
        simulate: true,
        flatPlaylist: true,
        cookies: this.cookies,
        cookiesFromBrowser: this.cookiesFromBrowser
      }).catch(e => {
        throw new DisTubeError("YTDLP_ERROR", `${e.stderr || e}`);
      });
    } else {
      info = await json(url, {
        concurrentFragments: 10,
        dumpSingleJson: true,
        extractAudio: true,
        format: this.format ?? "ba/ba*",
        markWatched: true,
        noWarnings: true,
        preferFreeFormats: true,
        skipDownload: true,
        simulate: true,
        cookies: this.cookies,
        cookiesFromBrowser: this.cookiesFromBrowser
      }).catch(e => {
        throw new DisTubeError("YTDLP_ERROR", `${e.stderr || e}`);
      });
    }
    if (isPlaylist(info)) {
      if (info.entries.length === 0) throw new DisTubeError("YTDLP_ERROR", "The playlist is empty");
      return new Playlist(
        {
          source: info.extractor,
          songs: info.entries.map(i => new YtDlpSong(this, i, options)),
          id: info.id.toString(),
          name: info.title,
          url: info.webpage_url,
          thumbnail: info.thumbnails?.[0]?.url,
        },
        options,
      );
    }
    return new YtDlpSong(this, info, options);
  }

  async getStreamURL(song: Song) {
    if (!song.url) {
      throw new DisTubeError("YTDLP_PLUGIN_INVALID_SONG", "Cannot get stream url from invalid song.");
    }
    const info = await json(song.url, {
      concurrentFragments: 10,
      dumpSingleJson: true,
      extractAudio: true,
      markWatched: true,
      noWarnings: true,
      preferFreeFormats: true,
      skipDownload: true,
      simulate: true,
      cookies: this.cookies,
      cookiesFromBrowser: this.cookiesFromBrowser,
      format: this.format ?? "ba/ba*",
    }).catch(e => {
      throw new DisTubeError("YTDLP_ERROR", `${e.stderr || e}`);
    });
    if (isPlaylist(info)) throw new DisTubeError("YTDLP_ERROR", "Cannot get stream URL of a entire playlist");
    return info.url;
  }

  getRelatedSongs() {
    return [];
  }
}

class YtDlpSong<T> extends Song<T> {
  constructor(plugin: YtDlpPlugin, info: YtDlpVideo, options: ResolveOptions<T> = {}) {
    super(
      {
        plugin,
        source: info.extractor || info.ie_key,
        playFromSource: true,
        id: info.id,
        name: info.title || info.fulltitle,
        url: info.webpage_url || info.original_url || info.url,
        isLive: info.is_live,
        thumbnail: info.thumbnail || info.thumbnails?.[0]?.url.toString().replace(/hqdefault/i, "maxresdefault"),
        duration: info.is_live ? 0 : info.duration,
        uploader: {
          name: info.uploader,
          url: info.uploader_url,
        },
        views: info.view_count,
        likes: info.like_count,
        dislikes: info.dislike_count,
        reposts: info.repost_count,
        ageRestricted: Boolean(info.age_limit) && info.age_limit >= 18,
      },
      options,
    );
  }
}

export * from "./wrapper";
