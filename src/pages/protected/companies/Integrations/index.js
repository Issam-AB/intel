import * as integrationsNames from "./constants";
import { callTracking } from "../Integrations/call-tracking/route";
import { websiteMetrics } from "./../Integrations/website-metrics/route";
import { marketingPerformance } from "../Integrations/marketing-performance/route";
import { websiteLead } from "../Integrations/website-leads/route";
import { support } from "../Integrations/support/route"

const listOfIntegrations = [];

listOfIntegrations[integrationsNames.MARKETING_PERFORMANCE] =
  marketingPerformance;
listOfIntegrations[integrationsNames.WEBSITE_METRICS] = websiteMetrics;
listOfIntegrations[integrationsNames.WEBSITE_LEADS] = websiteLead;
listOfIntegrations[integrationsNames.CALL_TRAKING] = callTracking;
listOfIntegrations[integrationsNames.SUPPORT] = support;

let userPermissions = [
  "marketing-performance",
  "website-metrics",
  "website-leads",
  "call-tracking",
  "call-tracking",
  "support"
];

let InegrationsRoutes = [];

for (let slug in listOfIntegrations) {
  if (userPermissions.indexOf(slug) !== -1) {
    InegrationsRoutes.push(listOfIntegrations[slug]);
  }
}
console.log("hi", InegrationsRoutes);

export default InegrationsRoutes;

// Jib la list dial les integrations li kayning 3nd username
//  looper f la lsit o verifier si ite
