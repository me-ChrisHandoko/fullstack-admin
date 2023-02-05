import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
    {
        puductId: String,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number
            }
        ],
        dailyData: [
            {
                date: String,
                totalSales: Number,
                totalUnits: Number
            }
        ]
    }, 
    {
        timestamp: true
    }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;