// app-bound services environment variables
module.exports = {
  get_services_label: function () {
    if (process.env.VCAP_SERVICES) {
      var svc_info = JSON.parse(process.env.VCAP_SERVICES)
      var service_labels = []
      for (var label in svc_info) {
        var svcs = svc_info[label]
        for (var index in svcs) {
          service_labels.push(svcs[index].label)
        }
      }
      return service_labels
    }
  },
  get_services_name: function () {
    if (process.env.VCAP_SERVICES) {
      var svc_info = JSON.parse(process.env.VCAP_SERVICES)
      var service_names = []
      for (var label in svc_info) {
        var svcs = svc_info[label]
        for (var index in svcs) {
          service_names.push(svcs[index].name)
        }
      }
      return service_names
    }
  },
  get_services_plan: function () {
    if (process.env.VCAP_SERVICES) {
      var svc_info = JSON.parse(process.env.VCAP_SERVICES)
      var service_plans = []
      for (var label in svc_info) {
        var svcs = svc_info[label]
        for (var index in svcs) {
          service_plans.push(svcs[index].plan)
        }
      }
      return service_plans
    }
  }
}
