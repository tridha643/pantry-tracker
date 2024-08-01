'use client'
import { useRouter } from 'next/navigation'
import { Box, Button, Typography } from '@mui/material'

export default function LandingPage() {
  const router = useRouter()

  const goToInventory = () => {
    router.push('/inventory') // This path should match the file name and location of your inventory component
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Typography variant="h2" color="#333" textAlign="center">
        Welcome to the Inventory Management System
      </Typography>
      <Button variant="contained" onClick={goToInventory}>
        Go to Inventory
      </Button>
    </Box>
  )
}
