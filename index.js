module.exports = (apiReq, options = {}) => {
  let toCity = (apiReq.to_city || '').toUpperCase();
  let nexusAddresses = apiReq.nexus_addresses || [];

  for (const address of nexusAddresses) {
    if (toCity.localeCompare(address.city && address.city.toUpperCase()) == 0) {
      return Object.assign({}, apiReq, {nexus_addresses: [address]});
    }
  }

  if (options.useTaxJarNexusFallback) {
    return Object.assign({}, apiReq, {nexus_addresses: null});
  }

  return apiReq;
};
