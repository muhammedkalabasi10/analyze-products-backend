import { Decimal128 } from 'mongodb'
import mongoose from 'mongoose'

const ProductSchema=mongoose.Schema({
    partnerId:String,
    barkod: String,
    komisyon: Number,
    modelKodu: String,
    urunRengi: String,
    beden: String,
    boyut: String,
    cinsiyet: String,
    marka: String,
    kategori: String,
    stokKodu: String,
    ad: String,
    aciklama: String,
    piyasaFiyat: Decimal128,
    satisFiyat: Decimal128,
    buyboxFiyat: Decimal128,
    stok: Number,
    KDV: Number,
    desi: Number,
    gorsel1: String,
    gorsel2: String,
    gorsel3: String,
    gorsel4: String,
    gorsel5: String,
    gorsel6: String,
    gorsel7: String,
    gorsel8: String,
    sevkiyatSuresi: Number,
    sevkiyatTipi: String,
    durum: String,
    neYapmaliyim: String,
    trendyolLinki: String
})

const ProductModel=mongoose.model('product',ProductSchema)
export default ProductModel