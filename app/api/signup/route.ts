
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/userModel";


export async function POST(req: Request) {
    try {

        const { username, email, phone, country, password } = await req.json();

        // check if user already exists
        const user = await User.findOne
            ({ email: email });
        if (user) {

            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            )
        }
        else {
            await connectMongoDB();
            await User.create({ username, email, phone, country, password })
            return NextResponse.json(
                { message: "User registered successfully" },
                { status: 200 }
            )
        }

    }
    catch (err) {
        return NextResponse.json(
            { message: "An error occurred while registering the user" },
            { status: 500 }
        )
    }
}