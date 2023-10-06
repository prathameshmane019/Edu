import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import University from "@/models/university";
export async function POST(req){
    try{
        const university = await req.json();
        console.log(university);
        await connectMongoDB();
        await University.create(university);
        return NextResponse.json({messege:"University Added" },{status:201});
    }
   catch(error){
    return NextResponse.json({messege:"University failed" },{status:201});
 
   }
}

export async function GET(req){
    try{
    
        await connectMongoDB();
        const university = await University.find();
        return NextResponse.json({university },{status:201});
    }

   catch(error){
    return NextResponse.json({error },{status:201});
 
   }
}
export async function DELETE(req){
    try{
        const id = req.nextUrl.searchParams.get("id")
        await connectMongoDB();
        await University.findByIdAndDelete(id);
        return NextResponse.json({messege:"University Deleted" },{status:201});
    }

   catch(error){
    return NextResponse.json({error },{status:201});
 
   }}
