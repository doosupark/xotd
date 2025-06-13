import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '40px 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://xotd.net/images/CI/CI_Logo_small.png"
              alt="XOTD Logo"
              width={200}
              height={200}
              style={{ marginBottom: '20px' }}
            />
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '20px',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '30px',
                color: '#666',
                marginBottom: '20px',
              }}
            >
              {description}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://xotd.net/images/CI/CI_Logo_small.png"
              alt="XOTD Logo"
              width={100}
              height={100}
              style={{ marginTop: '20px' }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 