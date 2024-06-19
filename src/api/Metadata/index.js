import HttpClient from "@/HttpClient"
import { MetadataEndpoints } from './config'
class MetadataApi {
    getMetadata = () => {
        return HttpClient.get(
            MetadataEndpoints.getMetadata(),
            {}
        )
    }
}

export default new MetadataApi();
