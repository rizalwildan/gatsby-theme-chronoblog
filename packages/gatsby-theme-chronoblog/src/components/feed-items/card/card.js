/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

export default ({ item }) => {
  return (
    <article>
      <Link
        to={item.fields.slug}
        sx={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <Styled.h2>{item.frontmatter.title}</Styled.h2>
        <Styled.p
          sx={{
            mb: 4,
            fontSize: [0, 0]
          }}
        >
          {item.frontmatter.date}
        </Styled.p>
        <Styled.p>
          {item.frontmatter.tags
            ? item.frontmatter.tags.map((t) => `${t} `)
            : ''}
        </Styled.p>
      </Link>
    </article>
  );
};
