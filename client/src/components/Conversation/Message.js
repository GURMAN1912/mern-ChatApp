import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgType'

const Message = ({menu}) => {
  return (
    <Box p={3}>
        <Stack direction={"column"} spacing={3}>
            {Chat_History.map((el)=>{
                console.log(el.type)
                switch(el.type){
                    case "divider":
                        return <TimeLine  el={el}/>
                    case "msg": 
                        switch (el.subtype){
                            case "img":
                                 return <MediaMsg menu={menu} el={el}/>
                                break;
                            case "doc":
                                return <DocMsg menu={menu} el={el}/>
                                break;
                            case "link":
                                return <LinkMsg menu={menu} el={el}/>
                                break;
                            case "reply":
                                return <ReplyMsg menu={menu} el={el}/>
                                break;
                            default:
                                 return <TextMsg menu={menu} el={el}/>
                        }
                        break;
                    default:

                        break;
                }
            })}
        </Stack>

    </Box>
  )
}

export default Message
