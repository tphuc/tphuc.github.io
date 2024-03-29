
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Nav from '../../components/Nav';
import SyntaxHighlighter from '../../components/SyntaxHiglighter';
import Page from '../../layouts/Page';
import Image from 'next/image';

import { RiArrowGoBackLine, RiArrowLeftFill, RiArrowLeftLine } from 'react-icons/ri';
import Link from 'next/link';
import readingTime from 'reading-time';
import { styled } from 'stiches.config';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import LightningCard from 'components/demo/sketches/LightningCard';
import { blackA, gray, mauve,  } from '@radix-ui/colors';
import { components } from 'components/sketchs-components';

const InlineCode = styled(`code`, {
  'fontFamily': "inherit",
  'font-size': '$smaller',
  lineHeight: 1.5,
  background: '$grayA3',
  'border': '1px solid $mauve7',
  'padding': '0px 2px',
  'border-radius': '4px',
  'whiteSpace': "nowrap"
})

const A = styled(`a`, {
  'text-decoration': 'underline',
  fontSize: "$small",
  color: "$mauve12"
})


const P = styled('p', {
  fontWeight: 300,
  lineHeight: 1,
  lineHeight: 1.5,
})


const H2 = styled('h2', {
  fontSize: "$medium",
  fontWeight: 300
})

const H1 = styled('h1', {
  fontSize: "$large",
  fontWeight: 300,
  marginTop: "2em"
})

const Li = styled('li', {
  fontWeight: 300
})



const Box = styled('div')
const ButtonBack = styled(`div`, {
  'display': 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'justify-content': 'space-between',
  'cursor': 'pointer',
  'transition': '0.4s ease all',
  'margin-top': '1em',
  'margin-bottom': '1em',
  float: "right",
  color: "$mauve11",
  height: 30,
  borderRadius: 8,
  padding: '0 10px',
  transition: "0.4s ease all",
  background: "$mauve2",
  border: "1px solid $mauve3",
  '&:hover': {
    background: "$mauve3",
    'color': '$text',
    'transform': 'translate(0px, 5px)',
  }
})

const Tag = styled(`span`, {
  color: '#535354',
  padding: '2px 4px',
  border: '1px solid #rgba(0,0,0,0.2)',
  'border-radius': '3px',
  'margin-right': '3px',
  'cursor': 'default',
  'background': 'rgba(0,0,0,0.1)'
})


const Text = styled('p', {
  fontWeight: 300,
  fontSize: "medium"
})

export default function Post({ frontMatter, slug, mdxSource, readTime }) {
  const { theme, setTheme } = useTheme();

  const meta = {
    title: frontMatter.title,
    description: frontMatter.description,
    ...frontMatter
  }
  const router = useRouter();
  return (
    <Page meta={meta}>
      <Text css={{ display: "flex", alignItems: "center", color: "$mauve11", cursor: "pointer", fontSize: "small" }} onClick={() => router.back()}><RiArrowGoBackLine /> Go back</Text>
      <Text css={{ fontSize: 'small', color: "$mauve11", }}>
        {frontMatter.date}
      </Text>
      <Text css={{ fontSize: "$large", fontWeight: 400, marginTop: 2 }}>
        Sketch: {frontMatter.title}
      </Text>

      {/* {frontMatter?.tags?.map((item, id) => <Tag key={id}>#{item}</Tag>)} */}
      {frontMatter.thumbnail && <div style={{ position: "relative", filter: theme == 'dark' ? "invert(1)" : "none", transition: "0.6s ease all", marginTop: 20, borderRadius: 8, overflow: 'hidden', width: "100%", height: 'max(260px, 14vw)' }}>
        <Image
          src={frontMatter.thumbnail}
          alt={frontMatter.title}
          layout='fill'
          objectFit='cover'
        />
      </div>}
      <Box css={{
        borderRadius:14,
        // border: '1px solid hsla(264, 100%, 100%, 0.06)',
        background: frontMatter?.theme == 'dark' ? '#121214' : blackA.blackA1
      }}>
      <Box css={{
         borderRadius:14,
         overflow:"hidden",
         border: '1px solid hsla(264, 100%, 100%, 0.06)',
        width: '100%', minHeight: 400, display: "flex",
        justifyContent: "center",
       
        backgroundImage: `linear-gradient(to right, ${frontMatter?.theme == 'dark' ? 'rgba(39, 39, 42, 0.25)' : blackA.blackA2} 1px, transparent 1px), linear-gradient(${frontMatter?.theme == 'dark' ? 'rgba(39, 39, 42, 0.25)' : blackA.blackA2} 1px, transparent 1px)`,
        'background-origin': 'border-box, border-box',
        'background-position-x': '0px, 0px',
        ' background-position-y': '0px, 0px',
        'background-size': '32px 32px, 32px 32px',
        alignItems: "center"
      }}>
        <MDXRemote  {...mdxSource} components={components} />
      </Box>
      </Box>
     

    </Page>
  );
};


export async function getStaticPaths() {
  // Read the files inside the pages/posts dir
  const files = fs.readdirSync(path.join("data/sketches"));
  // Generate path for each file
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params: { slug } }) {
  // read each file
  const markdown = fs.readFileSync(
    path.join("data/sketches", slug + ".mdx"),
    "utf-8"
  );

  // Extract front matter
  const { data: frontMatter, content } = matter(markdown);

  const mdxSource = await serialize(content);

  let readTime = readingTime(content).minutes

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      readTime
    },
  };
}

