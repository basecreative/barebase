module.exports = {
    'build-wms': [
        'copy:build-wms-core',
        'copy:build-lib-wms-plugins',
        'copy:build-lib-wms-scripts',
        'copy:build-src-wms-plugins',
        'copy:build-src-wms-scripts',
        'copy:build-src-wms-themes'
    ]
};
