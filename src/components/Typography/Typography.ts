import styled, { css } from 'styled-components';
import { typography } from '../../shared';

export const typographyDefinitions = {
  h1: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xxl};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  h2: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xl};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  h3: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.lg};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  h4: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.md};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  h5: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.sm};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  h6: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xs};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  subtitle1: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xs};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.size.lineHeight.xs};
  `,
  subtitle2: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xs};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  body1: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.md};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.size.lineHeight.xs};
  `,
  body2: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.sm};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.size.lineHeight.xs};
  `,
  body3: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.sm};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.size.lineHeight.xs};
  `,
  p1: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xs};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.size.lineHeight.sm};
  `,
  p2: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xxs};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.size.lineHeight.xs};
  `,
  p3: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xxxs};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.size.lineHeight.default};
  `,
  overline: `
    font-family: ${typography.type.primary};
    font-size: ${typography.size.paragraph.xs};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.size.lineHeight.sm};
  `,
} as const;

const setColor = ({ color, theme }: { color?: string; theme: any }) => {
  let c;
  if (color) c = color;
  else c = theme.fontColor;
  return css`
    color: ${c};
  `;
};

const H1 = styled.h1`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.h1};
`;

const H2 = styled.h2`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.h2};
`;

const H3 = styled.h3`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.h3};
`;

const H4 = styled.h4`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.h4};
`;

const H5 = styled.h5`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.h5};
`;

const H6 = styled.h6`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.h6};
`;

const Subtitle1 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.subtitle1};
`;

const Subtitle2 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.subtitle2};
`;

const Body1 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.body1};
`;

const Body2 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.body2};
`;

const Body3 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.body3};
`;

const P1 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.p1};
`;

const P2 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.p2};
`;

const P3 = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.p3};
`;

const Overline = styled.p`
  ${({ color, theme }) => setColor({ color, theme })}
  ${typographyDefinitions.overline};
`;

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Body3,
  P1,
  P2,
  P3,
  Overline,
};