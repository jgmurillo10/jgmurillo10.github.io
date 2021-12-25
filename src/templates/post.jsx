import React from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Moment from 'react-moment';
import { graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Layout from "components/Layout";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const PostHeroContainer = styled("div")`
    max-height: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 3em;

    img {
        width: 100%;
    }
`

const PostHeroAnnotation = styled("div")`
    padding-top: 0.25em;

    h6 {
        text-align: right;
        color: ${colors.grey600};
        font-weight: 400;
        font-size: 0.85rem;
    }

    a {
        color: currentColor;
    }
`

const PostCategory = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
    font-weight: 600;
    color: ${colors.grey600};

    h5 {
        margin-top: 0;
        margin-bottom: 1em;
    }
`

const PostTitle = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    text-align: center;

    h1 {
        margin-top: 0;
    }
`

const PostBody = styled("div")`
    max-width: 550px;
    margin: 0 auto;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }
`

const PostMetas = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    justify-content: space-between;
    font-size: 0.85em;
    color: ${colors.grey600};
`

const PostAuthor = styled("div")`
    margin: 0;
`

const PostDate = styled("div")`
    margin: 0;
`

const Subscribe = styled("div")`
    box-shadow: 0px 9px 24px rgb(0 0 0 / 6%);
    max-width: 550px;
    margin: 90px auto 0;
    padding: 24px;
    h4 {
        padding: 12px;
    }
    button {
        background-color: #73abff;
        border: none;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        margin: 12px;
        outline: none;
        padding: 1em 2em;
        width: 100%;

        &:focus {
            outline: auto 5px -webkit-focus-ring-color;
        }
    }
    input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        margin: 12px;
        font-size: 1rem;
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > div {
            display: block;
            width: 100%;
            margin: 12px;
        }
    }
`

const Post = ({ post, meta }) => {
    const url = "https://juanmurillo.us20.list-manage.com/subscribe/post?u=8099ac62ba887740228d614c1&id=1ffbb498a4"

    return (
        <>
            <Helmet
                title={`${post.post_title[0].text} | Blog`}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${post.post_title[0].text} | Blog`,
                    },
                    {
                        property: `og:description`,
                        content: meta.description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: meta.author,
                    },
                    {
                        name: `twitter:title`,
                        content: meta.title,
                    },
                    {
                        name: `twitter:description`,
                        content: meta.description,
                    },
                    {
                        property: `og:image`,
                        content: post.post_meta_image.url || meta.image,
                    },
                    {
                        property: `twitter:image`,
                        content: post.post_meta_image.url || meta.image,
                    },
                ].concat(meta)}
            />
            <Layout>
                <PostCategory>
                    {RichText.render(post.post_category)}
                </PostCategory>
                <PostTitle>
                    {RichText.render(post.post_title)}
                </PostTitle>
                <PostMetas>
                    <PostAuthor>
                        {post.post_author}
                    </PostAuthor>
                    <PostDate>
                        <Moment format="MMMM D, YYYY">{post.post_date}</Moment>
                    </PostDate>
                </PostMetas>
                    {post.post_hero_image && (
                    <PostHeroContainer>
                        <img src={post.post_hero_image.url} alt="bees" />
                        <PostHeroAnnotation>
                            {RichText.render(post.post_hero_annotation)}
                        </PostHeroAnnotation>
                    </PostHeroContainer>
                )}
                <PostBody>
                    {RichText.render(post.post_body)}
                </PostBody>
                <Subscribe>
                    <h4>Si te gustó este post agrega tu mail aquí abajo y dale "Submit" para mantenerte al tanto</h4    >
                    <MailchimpSubscribe url={url}/>
                </Subscribe>
            </Layout>
        </>
    )
}

export default ({ data }) => {
    const postContent = data.prismic.allPosts.edges[0].node;
    const meta = data.site.siteMetadata;
    return (
        <Post post={postContent} meta={meta}/>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    query PostQuery($uid: String) {
        prismic {
            allPosts(uid: $uid) {
                edges {
                    node {
                        post_title
                        post_hero_image
                        post_hero_annotation
                        post_date
                        post_category
                        post_body
                        post_author
                        post_preview_description
                        post_meta_image
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
                image
            }
        }
    }
`