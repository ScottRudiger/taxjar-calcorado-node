module.exports = (apiReq, options = {}) => {
  const toState = (apiReq.to_state || '').toUpperCase();
  const toCity = (apiReq.to_city || '').toUpperCase();
  const nexusAddresses = apiReq.nexus_addresses || [];

  for (const address of nexusAddresses) {
    const cityMatch = toCity.localeCompare(address.city && address.city.toUpperCase()) == 0;
    const stateMatch = toState.localeCompare(address.state && address.state.toUpperCase()) == 0;
    if (cityMatch && stateMatch) {
      return Object.assign({}, apiReq, {nexus_addresses: [address]});
    }
  }

  if (options.useTaxJarNexusFallback) {
    return Object.assign({}, apiReq, {nexus_addresses: null});
  }

  return apiReq;
};
