const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('single pokemon can view', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080/pokemon/bulbasaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})