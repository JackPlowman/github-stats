# Copyright (c) 2026 Jack Plowman

from playwright.sync_api import Page, expect

from ui.utils.variables import PROJECT_URL


def test_theme_persists_after_reload(page: Page) -> None:
    """Keep the selected theme when hydrating and reloading the dashboard."""
    page.emulate_media(color_scheme="light")
    page.goto(PROJECT_URL)
    root = page.locator("html")
    expect(root).to_have_class("light")
    page.get_by_role("button", name="Toggle theme").click()
    assert page.evaluate("localStorage.getItem('github-stats-theme')") == "light"
    page.get_by_role("button", name="Toggle theme").click()
    expect(root).to_have_class("dark")
    page.reload()
    expect(root).to_have_class("dark")
    page.get_by_role("button", name="Toggle theme").click()
    expect(root).to_have_class("light")


def test_sidebar_switches_to_mobile_after_resize(page: Page) -> None:
    """Update the sidebar when the viewport crosses the mobile breakpoint."""
    page.set_viewport_size({"width": 1280, "height": 900})
    page.goto(PROJECT_URL)
    expect(page.get_by_text("Application", exact=True)).to_be_visible()
    page.set_viewport_size({"width": 767, "height": 900})
    expect(page.get_by_text("Application", exact=True)).not_to_be_visible()
    page.keyboard.press("Control+b")
    expect(page.locator('[data-mobile="true"]')).to_be_visible()
    expect(page.get_by_text("Application", exact=True)).to_be_visible()
