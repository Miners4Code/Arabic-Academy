"use client"
import TopArrow from '@/icons/UserPage/TopArrow'
import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../edituser.module.css"
import SelectMenu from './SelectMenu'
const FormSelect = () => {
    const [showMenu, setShowMenu] = useState(false)
    const countries = ["Palestine", "Egypt", "Oman", "Jordan", "Syria", "Iraq", "Lebanon"]
    return (
        <Box
            marginTop={"10px"}
            textAlign={{
                base: "center",
                md: "start"
            }}
            pos={"relative"}
        >
            <p
                style={{ fontWeight: "bold" }}
            >البلد :</p>
            <Flex
                alignItems={"center"}
                className={styles.input}
                justifyContent={"space-between"}
                cursor={"pointer"}
                onClick={() => setShowMenu(!showMenu)}
            >
                <Box>
                    Palestine
                </Box>
                <Flex
                    height={"40px"}
                    alignItems={"center"}
                >
                    <TopArrow />
                </Flex>
            </Flex>
            {
                showMenu &&
                <SelectMenu handleSelect={() => setShowMenu(false)} countries={countries} />
            }
        </Box>
    )
}

export default FormSelect
