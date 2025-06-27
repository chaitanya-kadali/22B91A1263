const urlModel = require("../models/urlModel"); 

exports.storeURL = async(req, res)=>{
    const{url,validity , shortcode} = req.body;

    try{
        const existingURL = await urlModel.findOne({shortcode});
        if(existingURL){
            return res.status(201).json({
                success:false,
                message : "This URL is already used"
            });
        }
        const newURL = new urlModel({
            shortCode : shortcode, 
            longUrl: url, 
            validity : validity,
            // createdTime: { type: Date, default: Date.now },
            // clicks: { type: Number, default: 0 }  // -> incremented when called
        });
        await newURL.save();
        return res.status(200).json({
            success : true,
            message : "url info saved successfully",
            data : newURL,
        });
    }catch(err){
        console.error("error at url create/store");
        res.status(500).json({success:false, error:"internal server error at url create"})
    }
}