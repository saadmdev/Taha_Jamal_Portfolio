---
version: alpha
name: Adina Hawaldar
description: A minimal, editorial personal portfolio system with oversized typography, soft neutral surfaces, and restrained monochrome contrast.
colors:
  primary: "#111111"
  secondary: "#4B4B54"
  tertiary: "#E5E5E5"
  neutral: "#F4F4F4"
  surface: "#FFFFFF"
  on-surface: "#111111"
  error: "#B42318"
  border: "#E5E7EB"
  success: "#16A34A"
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 140px
    fontWeight: 700
    lineHeight: 168px
    letterSpacing: -5.6px
  headline-xl:
    fontFamily: Inter
    fontSize: 104px
    fontWeight: 700
    lineHeight: 125px
    letterSpacing: 0px
  headline-lg:
    fontFamily: Inter
    fontSize: 77px
    fontWeight: 400
    lineHeight: 92px
    letterSpacing: -1.5px
  headline-md:
    fontFamily: Inter
    fontSize: 57px
    fontWeight: 400
    lineHeight: 68px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: ui-sans-serif
    fontSize: 42px
    fontWeight: 400
    lineHeight: 63px
    letterSpacing: -0.84px
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-lg:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.02em
  label-md:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: ui-sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.08em
  overline:
    fontFamily: ui-sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.12em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 2px
  sm: 10px
  md: 16px
  lg: 32px
  xl: 48px
  2xl: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  divider:
    backgroundColor: "{colors.border}"
    height: "1px"
---
# Adina Hawaldar Design System
Specification for Muhammad Taha Jamal Malik portfolio redesign.
