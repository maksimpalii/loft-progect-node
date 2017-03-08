'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    //$.gulp.watch('./source/content/**/*.json', $.gulp.series('pug'));
    $.gulp.watch('./source/sprite/**/*.*', $.gulp.series('sprite:svg'));
    $.gulp.watch('./source/sprite/**/*.*', $.gulp.series('sprite:png'));
    $.gulp.watch('./source/sprite/**/*.*', $.gulp.series('sprite:gif'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy:font'));
  });
};
