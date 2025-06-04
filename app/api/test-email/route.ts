import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "API route is working",
    env_check: {
      serviceId: !!process.env.EMAILJS_SERVICE_ID,
      templateId: !!process.env.EMAILJS_TEMPLATE_ID,
      publicKey: !!process.env.EMAILJS_PUBLIC_KEY,
    },
  })
}

export async function POST() {
  try {
    // Simple test without EmailJS
    return NextResponse.json({ message: "POST request received successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
