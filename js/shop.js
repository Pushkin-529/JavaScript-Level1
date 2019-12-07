let PRODUCT_NAMES=['Processor','Display','Notebook','Mouse','Keyboard'];
let PRICES=[9000,15000,60000,500,1000];
let IDs = [0,1,2,3,4];
let products=[];
let bin=[];
let catalog={
    items:[],
    construct:function (){
        this._init()
    },
    _init:function fillProducts(){
        for(i=0;i<IDs.length;i++)
        {
            this.items.push({
                id: IDs[i],
                product_name:PRODUCT_NAMES[i],
                price:PRICES[i]
            })
        }
    }
}

function addProducts(id){
    BIN.push({
        id: IDs[id],
        product_name:PRODUCT_NAMES[id],
        price:PRICES[id]
    }
    )
}
catalog.construct ();
