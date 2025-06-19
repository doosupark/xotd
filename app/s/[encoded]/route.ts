import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ encoded: string }> }
) {
  try {
    const { encoded } = await context.params;
    
    // base64 디코딩
    const padded = encoded + '='.repeat((4 - encoded.length % 4) % 4);
    const decoded = Buffer.from(padded, 'base64')
      .toString('utf-8');
    
    const data = JSON.parse(decoded);
    
    // 원래 URL로 리다이렉트
    const redirectUrl = new URL('https://xotd.net');
    redirectUrl.searchParams.set('mbti', data.m);
    redirectUrl.searchParams.set('gender', data.g);
    redirectUrl.searchParams.set('hiragana', data.h);
    redirectUrl.searchParams.set('katakana', data.k);
    redirectUrl.searchParams.set('korean', data.n);
    redirectUrl.searchParams.set('index', data.i.toString());
    
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('URL 디코딩 오류:', error);
    // 오류 시 홈페이지로 리다이렉트
    return NextResponse.redirect('https://xotd.net');
  }
} 