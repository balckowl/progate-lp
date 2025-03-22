import { DownloadButton } from "@/components/download"

const page = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-150px)]">
            <div className="text-center">
                <h2 className="font-bold text-2xl mb-4">
                    You'll download that.
                </h2>
                <DownloadButton />
            </div>
        </div>
    )
}

export default page
