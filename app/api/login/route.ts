import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

    try {
        const { email, password } = await req.json();
        console.log('sa');

        connectMongoDB();

        const user = await User.findOne
            ({ email: email });

        if (!user) {
            return NextResponse.json(
                { message: "User does not exist" },
                { status: 400 }
            )
        }

        else {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                return NextResponse.json(
                    { message: "User logged in successfully", data: { user: user, isLoggedin: true } },
                    { status: 200 }
                )
            }
            else {
                return NextResponse.json(
                    { message: "Invalid Password" },
                    { status: 400 }
                )
            }
        }
    }
    catch (err) {
        return NextResponse.json(
            { message: "An Error Occoured while logging in the user!" + err },
            { status: 500 }
        )
    }
}