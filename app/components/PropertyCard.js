import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardImage
  } from "@/components/ui/card"
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Button } from "./ui/button"
import { Mail, Phone, Send, MapPin } from "lucide-react"
import Layout from "./Layout"

export function PropertyCard(props) {
    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://bayut-eg-production.s3.amazonaws.com/thumbnails/14335834-800x600.webp" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.price} EGP</h2>
            <p>Apartment for sale in Sheikh Zayed, 160m</p>
            <p className="flex"><MapPin className="mr-2 flex"/>{props.location}</p>
            <div className="card-actions justify-start mt-1">
            <TooltipProvider delayDuration={175}>
            <Tooltip>
            <TooltipTrigger asChild>
                <Button>
                    <Phone className="h-4 w-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Call Owner</p>
            </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={175}>
            <Tooltip>
            <TooltipTrigger asChild>
            <Button>
                <Mail className="h-4 w-4" />
            </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Send Email</p>
            </TooltipContent>
            </Tooltip>
            </TooltipProvider>
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