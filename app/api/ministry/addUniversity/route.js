import { NextResponse } from "next/server";

export async function POST(){
    return NextResponse.json({messege:"University Added" },{status:201});
}

export async function GET(){
    return NextResponse.json({messege:"University loaded" },{status:201});
}

export async function DELETE(){
    return NextResponse.json({messege:"University Deleted" },{status:201});
}
export async function PUT(){
    return NextResponse.json({messege:"University Updated" },{status:201});
}