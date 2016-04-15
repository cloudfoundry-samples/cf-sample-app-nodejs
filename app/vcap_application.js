// app-specific environment variables
module.exports = {
  get_app_name: function () {
    if ( process.env.VCAP_APPLICATION) {
      var app_info = JSON.parse( process.env.VCAP_APPLICATION)
      return app_info.name
    }
  },

  get_app_uris: function () {
    if ( process.env.VCAP_APPLICATION) {
      var app_info = JSON.parse( process.env.VCAP_APPLICATION)
      return app_info.uris.join(', ')
    }
  },

  get_app_space: function () {
    if ( process.env.VCAP_APPLICATION) {
      var app_info = JSON.parse( process.env.VCAP_APPLICATION)
      return app_info.space_name
    }
  },

  get_app_index: function () {
    if ( process.env.INSTANCE_INDEX) {
      var app_index = process.env.INSTANCE_INDEX
      return app_index
    }
  },

  get_app_mem_limits: function () {
    if ( process.env.VCAP_APPLICATION) {
      var app_info = JSON.parse( process.env.VCAP_APPLICATION)
      return app_info.limits.mem
    }
  },

  get_app_disk_limits: function () {
    if ( process.env.VCAP_APPLICATION) {
      var app_info = JSON.parse( process.env.VCAP_APPLICATION)
      return app_info.limits.disk
    }
  }
}
