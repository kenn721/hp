import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mediumUsername = process.env.MEDIUM_USERNAME
  if (!mediumUsername) {
    return res.status(500).json({ error: 'Medium username not configured' })
  }

  const rssUrl = `https://medium.com/feed/@${mediumUsername}`
  
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
    const data = await response.json()
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch Medium posts')
    }

    res.status(200).json(data.items)
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    res.status(500).json({ error: 'Failed to fetch Medium posts' })
  }
}

