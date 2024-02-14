import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardImage
  } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Mail, Phone, Send  } from "lucide-react"
import Layout from "./Layout"

export function PropertyCard(props) {
    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://bayut-eg-production.s3.amazonaws.com/thumbnails/14335834-800x600.webp" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Apartment</h2>
            <p>Rehab 2, group 122, building 8</p>
            <div className="card-actions justify-start mt-1">
            <Button>
                <Mail className="h-4 w-4" />
            </Button>
            <Button>
                <Phone className="h-4 w-4" />
            </Button>
            <Button>
                <Send className="mr-2 h-4 w-4" />
                Whatsapp
            </Button>
            </div>
        </div>
        </div>
        </>
    )
}