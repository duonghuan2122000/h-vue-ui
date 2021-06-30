/**
 * Cấu hình vue build public path deploy lên github Pages
 * @author CreatedBy: dbhuan 30/06/2021 
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/h-vue-ui/'
    : '/'
}
