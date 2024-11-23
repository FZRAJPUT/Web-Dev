import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

const Compiler = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>left side</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>right side</ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Compiler