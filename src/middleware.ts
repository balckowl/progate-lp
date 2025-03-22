import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { defaultLanguage, availableLanguages } from '@/i18n/settings';

const getNegotiatedLanguage = (
  headers: Negotiator.Headers,
): string | undefined => {
  return new Negotiator({ headers }).language([...availableLanguages]);
};

export const config = {
  // api や _next/static、_next/image、さらに png, jpg, svg, dmg ファイルはミドルウェア処理をスキップ
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|svg|dmg)$).*)',
  ],
};

export function middleware(request: NextRequest) {
  const headers = {
    'accept-language': request.headers.get('accept-language') ?? '',
  };
  const preferredLanguage = getNegotiatedLanguage(headers) || defaultLanguage;

  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = availableLanguages.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`,
  );

  if (pathnameIsMissingLocale) {
    if (preferredLanguage !== defaultLanguage) {
      return NextResponse.redirect(
        new URL(`/${preferredLanguage}${pathname}`, request.url),
      );
    } else {
      const newPathname = `/${defaultLanguage}${pathname}`;
      return NextResponse.rewrite(new URL(newPathname, request.url));
    }
  }

  return NextResponse.next();
}
