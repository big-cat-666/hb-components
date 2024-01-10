import {
  DrawerConfig,
  setDrawerConfig,
  setOpen,
  setSecondaryDrawerConfig,
  setSecondaryOpen,
} from './detailDrawer'
import { useAppDispatch, useAppSelector } from './index'

export const useDetailDrawerOpen = () => {
  const open = useAppSelector(
    (state: { detailDrawer: { open: boolean } }) => state.detailDrawer.open,
  )
  return open
}

export const useDetailDrawerConfig = () => {
  const drawerConfig = useAppSelector(
    (state: { detailDrawer: { config: DrawerConfig } }) =>
      state.detailDrawer.config,
  )
  return drawerConfig
}

export const useStoreDrawer = () => {
  const dispatch = useAppDispatch()
  const setStoreConfig = (config: DrawerConfig) => {
    dispatch(setDrawerConfig(config))
  }
  const setStoreOpen = (open: boolean) => {
    dispatch(setOpen(open))
  }

  return {
    setStoreConfig,
    setStoreOpen,
  }
}

export const useDetailDrawerSecondaryOpen = () => {
  const secondaryOpen = useAppSelector(
    (state: { detailDrawer: { secondaryOpen: boolean } }) =>
      state.detailDrawer.secondaryOpen,
  )
  return secondaryOpen
}

export const useDetailDrawerSecondaryConfig = () => {
  const secondaryDrawerConfig = useAppSelector(
    (state: { detailDrawer: { secondaryConfig: DrawerConfig } }) =>
      state.detailDrawer.secondaryConfig,
  )
  return secondaryDrawerConfig
}

export const useStoreSecondaryDrawer = () => {
  const dispatch = useAppDispatch()
  const setStoreSecondaryConfig = (config: DrawerConfig) => {
    dispatch(setSecondaryDrawerConfig(config))
  }
  const setStoreSecondaryOpen = (open: boolean) => {
    dispatch(setSecondaryOpen(open))
  }

  return {
    setStoreSecondaryConfig,
    setStoreSecondaryOpen,
  }
}
