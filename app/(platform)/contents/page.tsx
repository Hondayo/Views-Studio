"use client"

import { useState } from "react"
import Dropzone from "react-dropzone"
import { Cloud, File, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

const SimulatedUpload = () => {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return
    setUploading(true)
    setProgress(0)

    // シンプルなシミュレーション：一定間隔でプログレスを増加
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <Dropzone multiple={false} onDrop={handleDrop}>
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 border-dashed border-gray-300 rounded-lg"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <label className="flex flex-col items-center justify-center cursor-pointer">
              <Cloud className="h-6 w-6 text-zinc-500" />
              <p className="text-sm text-zinc-700">
                <span className="font-semibold">クリックしてアップロード</span>
                またはドラッグ＆ドロップ
              </p>
              <p className="text-xs text-zinc-500">動画ファイル (例: MP4, 最大100MB)</p>
              <input {...getInputProps()} type="file" accept="video/*" className="hidden" />
            </label>
            {acceptedFiles && acceptedFiles[0] && (
              <div className="mt-4 flex items-center">
                <File className="h-4 w-4 text-blue-500" />
                <span className="ml-2 text-sm">{acceptedFiles[0].name}</span>
              </div>
            )}
            {uploading && (
              <div className="w-full mt-4">
                <Progress value={progress} className="h-1 w-full bg-zinc-200" />
                {progress === 100 && (
                  <div className="flex gap-1 items-center justify-center text-sm text-zinc-700 pt-2">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    リダイレクト中...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </Dropzone>
  )
}

const ContentsPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  
  return (
    <div className="w-full h-screen">
      <div className="w-full px-8 flex justify-between items-center">
        <h2>あなたの動画</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="px-8 font-semibold">アップロード</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>動画アップロード</DialogTitle>
              <DialogDescription>
                動画ファイルをドラッグ＆ドロップまたはクリックして選択してください。
              </DialogDescription>
            </DialogHeader>
            <SimulatedUpload />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default ContentsPage
