import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import College from "@/models/college";
export async function POST(req){
    try{
        const college = await req.json();
        console.log(college);
        await connectMongoDB();
        await College.create(college);
        return NextResponse.json({messege:"College Added" },{status:201});
    }
   catch(error){
    return NextResponse.json({messege:"College failed" },{status:201});
 
   }
}

export async function GET(req){
    try{
    
        await connectMongoDB();
        const college = await College.find();
        return NextResponse.json({college },{status:201});
    }

   catch(error){
    return NextResponse.json({error },{status:201});
 
   }
}
export async function DELETE(req){
    try{
        const id = req.nextUrl.searchParams.get("id")
        await connectMongoDB();
        await College.findByIdAndDelete(id);
        return NextResponse.json({messege:"College Deleted" },{status:201});
    }

   catch(error){
    return NextResponse.json({error },{status:201});
 
   }}
