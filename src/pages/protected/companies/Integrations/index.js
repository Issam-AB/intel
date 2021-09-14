import * as integrationsNames from './constants';
import { callTracking } from './call-tracking/index';
import { websiteMetrics } from './website-metrics/route'
import { marketingPerformance } from "./marketing-performance/route";
import { websiteLead } from "./website-leads/route";


const listOfIntegrations = [];


listOfIntegrations[integrationsNames.MARKETING_PERFORMANCE] = marketingPerformance;
listOfIntegrations[integrationsNames.WEBSITE_METRICS] = websiteMetrics;
listOfIntegrations[integrationsNames.WEBSITE_LEADS] = websiteLead;
listOfIntegrations[integrationsNames.CALL_TRAKING] = callTracking;


let userPermissions = ["marketing-performance", "website-metrics", 'website-leads', 'call-tracking'];

let InegrationsRoutes = []

for (let slug in listOfIntegrations) {
    if (userPermissions.indexOf(slug) !== -1) {
        InegrationsRoutes.push(listOfIntegrations[slug])
    }
}

export default InegrationsRoutes;
