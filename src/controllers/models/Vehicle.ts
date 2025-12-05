import { TruckType } from "@type/global";

class VehicleModel {
    getType(type: TruckType | string):string{
        try{
            switch(type){
                case "open": return "খোলা"
                case "closed": return "বন্ধ"
                case "refrigerated": return "ঠান্ডা বা ফ্রিজ"
                case "tanker": return "ট্যাংকার"
                case "flatbed": return "ফ্ল্যাটবেড"
                case "container": return "কনটেইনার"
                default:
                    return "খোলা"

        }
        }
        catch(e: any){
            console.log(e);
            return "খোলা"
        }
    }
}

const Vehicle = new VehicleModel();

export default Vehicle;