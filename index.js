module.exports = (apiReq) => {
  let toCity = apiReq.to_city.toUpperCase();
  let nexusAddresses = apiReq.nexus_addresses || [];
  let idx = 0;

  for (const address of nexusAddresses) {
    if (toCity.localeCompare(address.city.toUpperCase()) == 0) {
      apiReq.nexus_addresses = address;
      return apiReq
    }
    if (idx++ === nexusAddresses.length - 1 && apiReq.nexus_addresses.length > 1) {
      delete apiReq.nexus_addresses;
      return apiReq
    }
  }

}
