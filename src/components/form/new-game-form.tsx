"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { NewGame } from "@/services/game/New-Game"

const formSchema = z.object({
  host_id: z.string().min(3, {
    message: "Game name must be at least 3 characters.",
  }),
})

export function NewGameForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      host_id: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await NewGame(data)
      console.log("Game created:", response)

      // ✅ Redirect to /{gameName}
      router.push(`/${response.id}`);
    } catch (error) {
      console.error("Failed to create game:", error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 px-4 w-full"
      >
        <FormField
          control={form.control}
          name="host_id"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-white">Game Name</FormLabel>
              <FormControl>
                <Input className="border-blue-400 text-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="default" type="submit">
          Create game
        </Button>
      </form>
    </Form>
  )
}