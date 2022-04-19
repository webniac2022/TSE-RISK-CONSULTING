import { useInView } from 'react-intersection-observer';
import CookieConsent from 'react-cookie-consent';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import * as contentful from 'contentful';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import {
  useState,
  useRef,
  useEffect,
  useMemo,
  Fragment,
  createContext,
  useContext,
} from 'react';
import { useCountUp } from 'react-countup';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export {
  useInView,
  CookieConsent,
  documentToReactComponents,
  BLOCKS,
  contentful,
  motion,
  useAnimation,
  AnimatePresence,
  useState,
  useRef,
  useEffect,
  useMemo,
  Fragment,
  createContext,
  useContext,
  useCountUp,
  PropTypes,
  clsx,
};
