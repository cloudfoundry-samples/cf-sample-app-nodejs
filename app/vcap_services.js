// app-bound services environment variables
function getServiceProperty(property) {
  if (process.env.VCAP_SERVICES) {
    var svc_info = JSON.parse(process.env.VCAP_SERVICES)
    result = new Array()
    for (var service_type in svc_info) {
      svc_info[service_type].forEach(function(service) {
        result.push(service[property])
      });
    }
    return result
  }
}
module.exports = {
  get_service_names: function() {
    return getServiceProperty('name')
  },
  get_service_labels: function() {
    return getServiceProperty('label')
  },
  get_service_plans: function() {
    return getServiceProperty('plan')
  }
}
