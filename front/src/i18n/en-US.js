export default {
  nav: {
    tasks: 'Tasks',
    extension: 'Extensions',
    setting: 'Settings',
    about: 'About',
    support: 'Support Us'
  },
  tip: {
    tip: 'Hint',
    ok: 'OK',
    cancel: 'Cancel',
    notNull: 'Cannot be empty',
    fmtErr: 'Incorrect format',
    choose: 'Choose',
    save: 'Save',
    copySucc: 'Copied successfully',
    copyFail: 'Copy failed'
  },
  tasks: {
    createTask: 'New Task',
    continueDownloading: 'Resume',
    pauseDownloads: 'Pause',
    deleteTask: 'Delete Task',
    deleteTaskTip: 'Delete both task and file',
    method: 'Method',
    url: 'URL',
    fileName: 'Name',
    fileSize: 'Size',
    connections: 'Connections',
    filePath: 'Path',
    status: 'Status',
    operate: 'Actions',
    downloadAddress: 'Address',
    wait: 'Waiting',
    unknowLeft: 'Unknown',
    downloadSpeed: 'Speed',
    createTime: 'Created',
    taskProgress: 'Progress',
    statusPause: 'Pause',
    statusFail: 'Failed',
    statusDone: 'Done',
    option: 'Options',
    head: 'Header',
    body: 'Body',
    detail: 'Details',
    checkSameTask: 'The same task already exists. Refresh the task?',
    sameTaskList: 'Task List',
    sameTaskPlaceholder: 'Please select the task to refresh',
    running: 'Downloading',
    waiting: 'Waiting',
    done: 'Done'
  },
  extension: {
    conditions: 'Notes',
    conditionsContent: 'When using the extension for the first time, you must install a CA certificate randomly generated by Proxyee Down. Click Install below and follow the instructions. If a Proxyee Down CA certificate has been installed, you will be prompted to delete the old CA certificate.',
    install: 'Install',
    globalProxy: 'Global Proxy',
    proxyTip: 'View instructions',
    copyPac: 'Copy PAC URL',
    title: 'Title',
    description: 'Description',
    currVersion: 'Current Version',
    newVersion: 'Latest Version',
    installStatus: 'Status',
    installStatusTrue: 'ON',
    installStatusFalse: 'OFF',
    action: 'Actions',
    actionUpdate: 'Update',
    actionInstall: 'Install',
    uninstall: 'Uninstall',
    actionDetail: 'Details',
    switch: 'ON/OFF',
    downloadingTip: 'Downloading...[servers(',
    downloadOk: 'Downloaded successfully',
    downloadErr: 'Download failed',
    downloadErrTip: 'Automatically switch servers',
    extCenter: 'Extension center',
    installLocalExt: 'Install local extension',
    installOk: 'Installed successfully',
    installErr: 'Installation failed, please check the manifest.json file'
  },
  setting: {
    downSetting: 'Download settings',
    path: 'Path',
    pathTip: 'Default download path',
    connections: 'Connections',
    connectionsTip: 'Default download connections',
    taskLimit: 'Simultaneous download tasks',
    taskSpeedLimit: 'Single task speed limit',
    globalSpeedLimit: 'Global speed limit',
    speedLimitTip: '0 for unlimited',
    appSetting: 'System settings',
    language: 'Language',
    uiMode: 'UI mode',
    uiModeWindows: 'Windows',
    uiModeBrowser: 'Browser',
    checkUpdate: 'Check for update',
    checkUpdateWeek: 'Every week',
    checkUpdateStartup: 'Every startup',
    checkUpdateNever: 'Never',
    secondProxy: {
      secondProxy: 'Second proxy',
      tip: 'Configure the second (pre-proxy) proxy server for the downloader',
      type: 'Type',
      host: 'Host',
      port: 'Port',
      user: 'Username',
      pwd: 'password'
    }
  },
  about: {
    project: {
      title: 'Project',
      content: 'Proxyee-Down is an open source, free software based on the software\'s high-speed download kernel and extensions to easily and quickly download the required resources.',
      githubAddress: 'Project homepage: ',
      official: 'Official website: ',
      community: 'Official community: ',
      tutorial: 'Tutorials: ',
      feedback: 'Feedback: ',
      currentVersion: 'Current Version: '
    },
    team: {
      title: 'Team'
    }
  },
  update: {
    checkNew: 'New version available',
    version: 'Version',
    changeLog: 'Changelog',
    update: 'Update',
    done: 'Update completed',
    restart: 'Restart Proxyee Down?',
    error: 'Update failed, please check the network or manually download the update package'
  },
  alert: {
    refused: 'Program exception: Connection refused',
    timeout: 'Program exception: Connection timeout',
    error: 'Program error',
    notFound: 'Task not found',
    '/tasks': {
      post: {
        4000: 'Params parse error',
        4001: 'Request is empty',
        4002: 'Request URL is empty',
        4003: 'File save path is empty',
        4004: 'Failed to create folder',
        4005: 'No write permission',
        4006: 'Not enough disk space',
        4007: 'File already exists'
      }
    }
  },
  '/util/resolve': {
    put: {
      4000: 'Params parse error',
      4001: 'Request URL is empty',
      4002: 'Response status code exception',
      4003: 'Request timeout'
    }
  },
  '/config': {
    put: {
      4000: 'Params parse error'
    }
  }
}
