
import React from 'react'
import { 
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
 } from './ui/tabs'
 import { SearchBox } from './searchbox'

 interface tabboxProps{
    items: string[];
    content?: React.ReactNode;
 }

export const TabBox = ({...props}: tabboxProps) => {

  return (
    <Tabs defaultValue="All" className="w-full flex items-start justify-center p-4">
        <div className='flex flex-row items-start gap-2 w-full'>
        <SearchBox placeholder={"Search..."} />
        <TabsList>
            {
                props.items.map((item) => 
                    (   
                        <div key={item}>
                                <TabsTrigger value={item}>{item}</TabsTrigger>
                        </div>
                        )
                    )
            }
        </TabsList>
        </div>
        <div className={"grid grid-col-1 w-full h-full"}>
            {
                props.items.map((item) => (
                    <div key={item}>
                        <TabsContent value={item}>
                            {props.content}
                            {item}
                        </TabsContent>
                    </div>
                ))
            }
        </div>
    </Tabs>
  )
}
