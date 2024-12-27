export interface YtDlpFlags {
  help?: boolean;
  version?: boolean;
  update?: boolean;
  ignoreErrors?: boolean;
  abortOnError?: boolean;
  dumpUserAgent?: boolean;
  listExtractors?: boolean;
  extractorDescriptions?: boolean;
  forceGenericExtractor?: boolean;
  defaultSearch?: string;
  ignoreConfig?: boolean;
  configLocation?: string;
  flatPlaylist?: boolean;
  liveFromStart?: boolean;
  waitForVideo?: number;
  markWatched?: boolean;
  noColor?: boolean;
  compatOptions?: string;
  proxy?: string;
  socketTimeout?: number;
  sourceAddress?: string;
  forceIpv4?: boolean;
  forceIpv6?: boolean;
  geoVerificationProxy?: string;
  geoBypass?: boolean;
  geoBypassCountry?: string;
  geoBypassIpBlock?: string;
  playlistStart?: number;
  playlistEnd?: number | "last";
  playlistItems?: number | string;
  minFilesize?: string;
  maxFilesize?: string;
  date?: string;
  datebefore?: string;
  dateafter?: string;
  matchFilter?: string;
  noPlaylist?: boolean;
  yesPlaylist?: boolean;
  ageLimit?: number;
  downloadArchive?: string;
  maxDownloads?: number;
  breakOnExisting?: boolean;
  breakOnReject?: boolean;
  breakPerInput?: boolean;
  noBreakPerInput?: boolean;
  skipPlaylistAfterErrors?: number;
  concurrentFragments?: number;
  limitRate?: string;
  throttledRate?: string;
  retries?: number | "infinite";
  fileAccessRetries?: number | "infinite";
  skipUnavailableFragments?: boolean;
  abortOnUnavailableFragment?: boolean;
  keepFragments?: boolean;
  bufferSize?: string;
  noResizeBuffer?: boolean;
  httpChunkSize?: number | string;
  playlistReverse?: boolean;
  playlistRandom?: boolean;
  xattrSetFilesize?: boolean;
  hlsUseMpegts?: boolean;
  noHlsUseMpegts?: boolean;
  downloader?: string;
  downloaderArgs?: string;
  batchFile?: string;
  paths?: string;
  output?: string;
  outputNaPlaceholder?: string;
  restrictFilenames?: boolean;
  windowsFilenames?: boolean;
  trimFilenames?: boolean;
  noOverwrites?: boolean;
  continue?: boolean;
  noContinue?: boolean;
  noPart?: boolean;
  noMtime?: boolean;
  writeDescription?: boolean;
  writeInfoJson?: boolean;
  noWritePlaylistMetafiles?: boolean;
  noCleanInfojson?: boolean;
  writeComments?: boolean;
  loadInfoJson?: string;
  cookies?: string;
  cookiesFromBrowser?: string;
  cacheDir?: string;
  noCacheDir?: boolean;
  rmCacheDir?: boolean;
  writeThumbnail?: boolean;
  writeAllThumbnails?: boolean;
  listThumbnails?: boolean;
  writeLink?: boolean;
  writeUrlLink?: boolean;
  writeWeblocLink?: boolean;
  writeDesktopLink?: boolean;
  quiet?: boolean;
  noWarnings?: boolean;
  simulate?: boolean;
  ignoreNoFormatsError?: boolean;
  skipDownload?: boolean;
  print?: string;
  printToFile?: string;
  dumpJson?: boolean;
  dumpSingleJson?: boolean;
  forceWriteArchive?: boolean;
  newline?: boolean;
  verbose?: boolean;
  dumpPages?: boolean;
  writePages?: boolean;
  printTraffic?: boolean;
  callHome?: boolean;
  encoding?: string;
  legacyServerConnect?: boolean;
  noCheckCertificate?: boolean;
  preferInsecure?: boolean;
  userAgent?: string;
  referer?: string;
  addHeader?: string;
  bidiWorkaround?: boolean;
  sleepRequests?: number;
  sleepInterval?: number;
  maxSleepInterval?: number;
  sleepSubtitles?: number;
  format?: string;
  formatSort?: string;
  formatSortForce?: boolean;
  videoMultistreams?: boolean;
  audioMultistreams?: boolean;
  preferFreeFormats?: boolean;
  checkFormats?: boolean;
  checkAllFormats?: boolean;
  noCheckFormats?: boolean;
  listFormats?: boolean;
  mergeOutputFormat?: string;
  writeSub?: boolean;
  writeAutoSub?: boolean;
  listSubs?: boolean;
  subFormat?: string;
  subLangs?: string;
  username?: string;
  password?: string;
  twofactor?: string;
  netrc?: boolean;
  videoPassword?: string;
  apMso?: string;
  apUsername?: string;
  apPassword?: string;
  apListMso?: boolean;
  extractAudio?: boolean;
  audioFormat?: string;
  audioQuality?: number;
  remuxVideo?: string;
  recodeVideo?: string;
  postprocessorArgs?: string;
  keepVideo?: boolean;
  noPostOverwrites?: boolean;
  embedSubs?: boolean;
  embedThumbnail?: boolean;
  embedMetadata?: boolean;
  embedChapter?: boolean;
  embedInfoJson?: boolean;
  parseMetadata?: string;
  replaceInMetadata?: string | string[];
  xattrs?: boolean;
  concatPlaylist?: string;
  fixup?: string;
  ffmpegLocation?: string;
  exec?: string;
  convertSubs?: string;
  convertThumbnails?: string;
  splitChapters?: boolean;
  removeChapters?: string;
  forceKeyframesAtCuts?: boolean;
  usePostprocessor?: string;
  sponsorblockMark?: string;
  sponsorblockRemove?: string;
  sponsorblockChapterTitle?: string;
  noSponsorblock?: boolean;
  sponsorblockApi?: string;
  extractorRetries?: number | "infinite";
  ignoreDynamicMpd?: boolean;
  hlsSplitDiscontinuity?: boolean;
  extractorArgs?: string;
  [x: string]: any;
}

export interface YtDlpFormat {
  format_id: string;
  format_note: string;
  ext: string;
  protocol: string;
  acodec: string;
  vcodec: string;
  url: string;
  width: number | null;
  height: number | null;
  fragments: any;
  audio_ext: string;
  video_ext: string;
  format: string;
  resolution: string;
  http_headers: any;
  asr: number;
  filesize: number;
  source_preference: number;
  fps: null;
  quality: number;
  tbr: number;
  language: string;
  language_preference: number;
  dynamic_range: null;
  abr: number;
  downloader_options: {
    http_chunk_size: number;
  };
  container: string;
}

export interface YtDlpThumbnail {
  url: string;
  preference: number;
  id: string;
  height?: number;
  width?: number;
  resolution?: string;
}

export interface YtDlpCaption {
  ext: string;
  url: string;
  name: string;
}

export interface YtDlpVideo {
  id: string;
  title: string;
  fulltitle: string;
  url: string;
  ext: string;
  alt_title: string;
  description: string;
  display_id: string;
  uploader: string;
  license: string;
  creator: string;
  timestamp: number;
  upload_date: string;
  release_timestamp: number;
  release_date: string;
  modified_timestamp: number;
  modified_date: string;
  uploader_id: string;
  channel: string;
  channel_id: string;
  channel_follower_count: number;
  location: string;
  duration: number;
  duration_string: string;
  view_count: number;
  like_count: number;
  dislike_count: number;
  repost_count: number;
  average_rating: number;
  comment_count: number;
  age_limit: number;
  live_status: string;
  is_live: boolean;
  was_live: boolean;
  playable_in_embed: string;
  availability: string;
  start_time: number;
  end_time: number;
  format: string;
  format_id: string;
  format_note: string;
  width: number;
  height: number;
  resolution: string;
  tbr: number;
  abr: number;
  acodec: string;
  asr: number;
  vbr: number;
  fps: number;
  dynamic_range: string;
  vcodec: string;
  container: string;
  filesize: number;
  filesize_approx: number;
  protocol: string;
  src: string; // Hack, to be removed
  extractor: string;
  extractor_key: string;
  epoch: number;
  autonumber: number;
  video_autonumber: number;
  n_entries: number;
  playlist_id: string;
  playlist_title: string;
  playlist: string;
  playlist_count: number;
  playlist_index: number;
  playlist_autonumber: number;
  playlist_uploader: string;
  playlist_uploader_id: string;
  webpage_url: string;
  webpage_url_basename: string;
  webpage_url_domain: string;
  original_url: string;
  formats: YtDlpFormat[];
  thumbnails: YtDlpThumbnail[];
  thumbnail: string;
  uploader_url: string;
  channel_url: string;
  categories: string[];
  tags: string[];
  automatic_captions: Record<string, YtDlpCaption[]>;
  subtitles: unknown;
  chapters: any[];
  requested_subtitles: unknown;
  __has_drm: boolean;
  requested_downloads: unknown[];
  source_preference: number;
  quality: number;
  language: string;
  language_preference: number;
  downloader_options: {
    http_chunk_size: number;
  };
  audio_ext: string;
  video_ext: string;
  http_headers: unknown;
  _last_playlist_index: number;
  requested_formats: unknown[];
  stretched_ratio: unknown;
}

export interface YtDlpPlaylist {
  uploader: string;
  uploader_id: string;
  uploader_url: string;
  thumbnails: YtDlpThumbnail[];
  tags: string[];
  view_count: number;
  modified_date: string;
  playlist_count: number;
  channel_follower_count: number | null;
  channel: string;
  channel_id: string;
  channel_url: string;
  id: string;
  title: string;
  description: string;
  entries: YtDlpVideo[];
  original_url: string;
  webpage_url: string;
  webpage_url_basename: string;
  webpage_url_domain: string;
  extractor: string;
  extractor_key: string;
  epoch: number;
}

export type YtDlpResponse = YtDlpVideo | YtDlpPlaylist;

export interface YtDlpOptions {
  update?: boolean;
  cookies?: string;
  cookiesFromBrowser?: string | "chrome" | "firefox";
}
