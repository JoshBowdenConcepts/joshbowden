/**
 * Generate public/og-image.png from homepage hero content.
 * Run: npm run generate:og-image
 *      sh scripts/generate-og-image.sh
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import sharp from "sharp";
import { portfolioData } from "../src/data/portfolio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const colors = {
  bg: "#fefefb",
  tx1: "#1a1a18",
  tx2: "#5a5a55",
  red: "#c42e24",
  card: "#ffffff",
  border: "#e4e3de",
};

function loadFont(packageName: string, filename: string): Buffer {
  return readFileSync(
    join(root, "node_modules", packageName, "files", filename),
  );
}

async function generateOgImage() {
  const { personal, about } = portfolioData;

  const playfair = loadFont(
    "@fontsource/playfair-display",
    "playfair-display-latin-400-normal.woff",
  );
  const dmSansRegular = loadFont(
    "@fontsource/dm-sans",
    "dm-sans-latin-400-normal.woff",
  );
  const dmSansSemiBold = loadFont(
    "@fontsource/dm-sans",
    "dm-sans-latin-600-normal.woff",
  );
  const dmSansBold = loadFont(
    "@fontsource/dm-sans",
    "dm-sans-latin-700-normal.woff",
  );

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.bg,
          padding: "48px 80px",
          fontFamily: "DM Sans",
        },
        children: {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              maxWidth: 900,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: colors.red,
                    marginBottom: 16,
                  },
                  children: `${personal.location} · ${personal.pronouns}`,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontFamily: "Playfair Display",
                    fontSize: 52,
                    lineHeight: 1.15,
                    color: colors.tx1,
                    marginBottom: 16,
                  },
                  children: `Hello, I'm ${personal.name}.`,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 22,
                    lineHeight: 1.5,
                    color: colors.tx2,
                    marginBottom: 20,
                  },
                  children: personal.headline,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: colors.tx2,
                    marginBottom: 28,
                  },
                  children: about,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          padding: "12px 32px",
                          borderRadius: 40,
                          fontWeight: 600,
                          fontSize: 15,
                          backgroundColor: colors.red,
                          color: colors.card,
                          border: `1px solid ${colors.red}`,
                        },
                        children: "Let's talk",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          padding: "12px 32px",
                          borderRadius: 40,
                          fontWeight: 600,
                          fontSize: 15,
                          backgroundColor: colors.card,
                          color: colors.tx1,
                          border: `1px solid ${colors.border}`,
                        },
                        children: "View work",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Playfair Display",
          data: playfair,
          weight: 400,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSansRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSansSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSansBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  const outputPath = join(root, "public", "og-image.png");
  writeFileSync(outputPath, png);
  console.log(`Wrote ${outputPath} (${WIDTH}x${HEIGHT})`);
}

generateOgImage().catch((error) => {
  console.error(error);
  process.exit(1);
});
