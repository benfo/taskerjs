declare class Tasker {
  /**
   * Set the alarm volume.
   *
   * @param level Set the volume to level.
   * @param display If display is true, the new level will be flashed up on-screen.
   * @param sound If sound is true, a tone will sound at the new level.
   */
  alarmVol(level: number, display: boolean, sound: boolean): boolean;

  /**
   * Start an audio recording.
   *
   * @param destPath: Where to put the recording. Note that a file extension is not necessary, it will correspond to the selected format.
   * @param source: def, mic, call, callout or callin
   * @param codec: amrn, amrw or aac
   * @param format: mp4, 3gpp, amrn or amrw
   */
  audioRecord(
    destPath: string,
    source: string,
    codec: string,
    format: string
  ): boolean;

  /**
   * Stop recording previously initiated by audioRecord().
   */
  audioRecordStop(): boolean;

  /**
   * Set the bluetooth voice volume to level.
   *
   * @param level Set the bluetooth voice volume to level.
   * @param display If display is true, the new level will be flashed up on-screen.
   * @param sound If sound is true, a tone will sound at the new level.
   */
  btVoiceVol(level: number, display: boolean, sound: boolean): boolean;

  /**
   * Open the default browser at the specified URL.
   *
   * @param URL The URL to open.
   */
  browseURL(URL: string): boolean;

  /**
   * Simulate a press of the named button (this function requires a rooted device).
   *
   * @param name must be one of back, call, camera, endcall, menu, volup, voldown or search.
   */
  button(name: string): boolean;

  /**
   * Make outgoing calls.
   *
   * @param num Make outgoing calls using num.
   * @param autoDial If autoDial is false, the phone app will be brought up with the number pre-inserted, if true the number will also be dialed.
   */
  call(num: string, autoDial: boolean): boolean;

  /**
   * Block outgoing calls.
   *
   * @param numMatch Block outgoing calls matching numMatch.
   * @param showInfo If showInfo is set, Tasker will flash a message when a call is blocked.
   */
  callBlock(numMatch: string, showInfo: boolean): boolean;

  /**
   * Divert outgoing calls matching fromMatch to the number to.
   *
   * @param fromMatch
   * @param to
   * @param showInfo If showInfo is set, Tasker will flash a message when a call is diverted.
   */
  callDivert(fromMatch: string, to: string, showInfo: boolean): boolean;

  /**
   * Stop blocking or diverting outgoing calls previously specified with callBlock or callDivert.
   *
   * @param numMatch
   */
  callRevert(numMatch: string): boolean;

  /**
   * Set the call volume.
   *
   * @param level Set the volume to level.
   * @param display If display is true, the new level will be flashed up on-screen.
   * @param sound If sound is true, a tone will sound at the new level.
   */
  callVol(level: number, display: boolean, sound: boolean): boolean;

  /**
   * Turn on or off Android Car Mode.
   */
  carMode(onFlag: boolean): boolean;

  /**
   * Clear the passphrase for the specified keyName.
   * See Also: Encryption in the Userguide.
   */
  clearKey(keyName: string): boolean;

  /**
   * Show an email composition dialog with any specified fields pre-filled.
   * The JavaScript does not wait for the email to be sent before continuing.
   */
  composeEmail(to: string, subject: string, message: string): boolean;

  /**
   * Show an MMS composition dialog with any specified fields pre-filled.
   * The JavaScript does not wait for the MMS to be sent before continuing.
   */
  composeMMS(
    to: string,
    subject: string,
    message: string,
    attachmentPath: string
  ): boolean;

  /**
   * Show an SMS composition dialog with any specified fields pre-filled.
   * The JavaScript does not wait for the SMS to be sent before continuing.
   */
  composeSMS(to: string, message: string): boolean;

  /**
   * Convert from one type of value to another.
   *
   * @param val The value to convert.
   * @param conversionType Must be one of the string constants: byteToKbyte, byteToMbyte, byteToGbyte, datetimeToSec, secToDatetime, secToDatetimeM, secToDatetimeL, htmlToText, celsToFahr, fahrToCels, inchToCent, metreToFeet, feetToMetre, kgToPound, poundToKg, kmToMile, mileToKm, urlDecode, urlEncode, binToDec, decToBin, hexToDec, decToHex, base64encode base64decode, toMd5, toSha1, toLowerCase, toUpperCase, toUpperCaseFirst.
   */
  convert(val: string, conversionType: string): string;

  createDir(a1: any, a2: any, a3: any): boolean;
  createScene(a1: any): boolean;
  cropImage(a1: any, a2: any, a3: any, a4: any): boolean;
  decryptDir(a1: any, a2: any, a3: any): boolean;
  decryptFile(a1: any, a2: any, a3: any): boolean;
  deleteDir(a1: any, a2: any, a3: any): boolean;
  deleteFile(a1: any, a2: any, a3: any): boolean;
  destroyScene(a1: any): boolean;
  disable(): boolean;
  displayAutoBright(a1: any): boolean;
  displayAutoRotate(a1: any): boolean;
  displayTimeout(a1: any, a2: any, a3: any): boolean;
  dpad(a1: any, a2: any): boolean;
  dtmfVol(a1: any, a2: any, a3: any): boolean;
  elemBackColour(a1: any, a2: any, a3: any, a4: any): boolean;
  elemBorder(a1: any, a2: any, a3: any, a4: any): boolean;
  elemPosition(a1: any, a2: any, a3: any, a4: any, a5: any, a6: any): boolean;
  elemText(a1: any, a2: any, a3: any, a4: any): boolean;
  elemTextColour(a1: any, a2: any, a3: any): boolean;
  elemTextSize(a1: any, a2: any, a3: any): boolean;
  elemVisibility(a1: any, a2: any, a3: any, a4: any): boolean;
  endCall(): boolean;
  enableProfile(a1: any, a2: any): boolean;
  encryptDir(a1: any, a2: any, a3: any, a4: any): boolean;
  encryptFile(a1: any, a2: any, a3: any, a4: any): boolean;
  enterKey(
    a1: any,
    a2: any,
    a3: any,
    a4: any,
    a5: any,
    a6: any,
    a7: any
  ): boolean;
  exit(): void;

  /**
   * Flash a short-duration Android 'Toast' message.
   *
   * @param message The message.
   */
  flash(message: string): void;

  /**
   * Flash a long-duration Android 'Toast' message.
   *
   * @param message The message
   */
  flashLong(message: any): void;
  filterImage(a1: any, a2: any): boolean;
  flipImage(a1: any): boolean;
  getLocation(a1: any, a2: any, a3: any): boolean;
  getVoice(a1: any, a2: any, a3: any): string;

  /**
   * Retrieve the value of a Tasker global variable. Prefixing the name with % is optional.
   *
   * @param varName Name of the global variable.
   */
  global(varName: string): string;
  goHome(a1: any): void;
  haptics(a1: any): boolean;
  hideScene(a1: any): boolean;
  listFiles(a1: any, a2: any): string;
  loadApp(a1: any, a2: any, a3: any): boolean;
  loadImage(a1: any): boolean;

  /**
   * Retrieve the value of a Tasker scene-local variable. The name should not be prefixed with %.
   * This function is only for use by JavaScript embedded in HTML and accessed via a WebView scene element.
   *
   * @param varName Name of the local variable.
   */
  local(varName: string): string;

  /**
   * Show a lock screen, preventing user interaction with the covered part of the screen.
   * The JavaScript waits until the code has been entered or the lock cancelled (see below).
   *
   * @param title
   * @param code The numeric code which must be entered for unlock
   * @param allowCancel Show a button to remove the lockscreen, which causes a return to the Android home screen
   * @param rememberCode The code will be remembered and automatically entered when the lock screen is show in future, until the display next turns off
   * @param background [optional] A file path or file URI to a background image.
   * @param layout The name of a user-created scene to use in place of the built-in lock scene
   */
  lock(
    title: string,
    code: string,
    allowCancel: boolean,
    rememberCode: boolean,
    fullScreen: boolean,
    background?: string,
    layout: string
  ): boolean;

  mediaControl(a1: any): boolean;
  mediaVol(a1: any, a2: any, a3: any): boolean;
  micMute(a1: any): boolean;
  mobileData(a1: any): boolean;
  musicBack(a1: any): boolean;
  musicPlay(a1: any, a2: any, a3: any, a4: any): boolean;
  musicSkip(a1: any): boolean;
  musicStop(): boolean;
  nightMode(a1: any): boolean;
  notificationVol(a1: any, a2: any, a3: any): boolean;

  /**
   * Run the Tasker task taskName.
   * Note that the JavaScript does not wait for the task to complete.
   * @param taskName
   * @param priority
   * @param parameterOne
   * @param parameterTwo
   */
  performTask(
    taskName: string,
    priority: number,
    parameterOne: string,
    parameterTwo: string
  ): boolean;

  /**
   * Show a popup dialog. The JavaScript waits until the popup has been dismissed or the timeout reached.
   *
   * @param background [optional] A file path or file URI to a background image.
   * @param layout The name of a user-created scene to use in place of the built-in popup scene.
   */
  popup(
    title: string,
    text: string,
    showOverKeyguard: boolean,
    background: string,
    layout: string,
    timeoutSecs: number
  ): boolean;

  /**
   * Whether the named Tasker profile is currently active.
   * Returns false if the profile name is unknown.
   */
  profileActive(profileName: boolean): boolean;

  pulse(a1: any): boolean;
  readFile(a1: any): string;

  /**
   * Reboot the device.
   *
   * @param type Is one of normal, recovery or bootloader. It can be ommitted and defaults to normal.
   */
  reboot(type?: string): boolean;

  resizeImage(a1: any, a2: any): boolean;
  ringerVol(a1: any, a2: any, a3: any): boolean;
  rotateImage(a1: any, a2: any): boolean;
  saveImage(a1: any, a2: any, a3: any): boolean;
  say(
    a1: any,
    a2: any,
    a3: any,
    a4: any,
    a5: any,
    a6: any,
    a7: any,
    a8: any
  ): boolean;
  scanCard(a1: any): boolean;
  sendIntent(
    a1: any,
    a2: any,
    a3: any,
    a4: any,
    a5: any,
    a6: any,
    a7: any,
    a8: any
  ): boolean;
  sendSMS(a1: any, a2: any, a3: any): boolean;
  setClip(a1: any, a2: any): boolean;
  settings(a1: any): boolean;
  setAirplaneMode(a1: any): boolean;
  setAirplaneRadios(a1: any): boolean;
  setAlarm(a1: any, a2: any, a3: any, a4: any): boolean;
  setAutoSync(a1: any): boolean;
  setBT(a1: any): boolean;
  setBTID(a1: any): boolean;

  /**
   * Set the value of a Tasker global user variable. Prefixing varName with % is optional.
   * Arrays are not supported due to limitations of the Android JS interface.
   *
   * @param varName Name of variable.
   * @param newValue A string value.
   */
  setGlobal(varName: string, newValue: string): void;
  setKey(a1: any, a2: any): boolean;

  /**
   * Set the value of a Tasker scene-local user variable. Variable names should not be prefixed with %.
   * This function is only for use by JavaScript embedded in HTML and accessed via a WebView scene element.
   *
   * @param varName Name of variable.
   * @param newValue A string value.
   */
  setLocal(varName: string, newValue: string): void;
  setWallpaper(a1: any): boolean;
  setWifi(a1: any): boolean;
  shell(a1: any, a2: any, a3: any): string;
  showScene(a1: any, a2: any, a3: any, a4: any, a5: any, a6: any): boolean;
  shutdown(): boolean;
  silentMode(a1: any): boolean;
  sl4a(a1: any, a2: any): boolean;
  soundEffects(a1: any): boolean;
  speakerphone(a1: any): boolean;
  statusBar(a1: any): boolean;
  stayOn(a1: any): boolean;
  stopLocation(a1: any): boolean;
  systemLock(): boolean;
  systemVol(a1: any, a2: any, a3: any): boolean;
  takeCall(): boolean;
  takePhoto(a1: any, a2: any, a3: any, a4: any): boolean;
  taskRunning(a1: any): boolean;
  type(a1: any, a2: any): boolean;
  unzip(a1: any, a2: any): boolean;
  usbTether(a1: any): boolean;
  vibrate(a1: any): void;
  vibratePattern(a1: any): boolean;
  wait(a1: any): boolean;
  wifiTether(a1: any): boolean;
  writeFile(a1: any, a2: any, a3: any): boolean;
  zip(a1: any, a2: any, a3: any): boolean;
}
