# How to Add Your Credly Badges

## Step 1: Get Your Badge IDs

1. Go to [Credly.com](https://www.credly.com) and log in
2. Navigate to your profile and click on each badge you want to display
3. Click the "Share" button on the badge
4. Select "Embed" option
5. Copy the badge ID from the embed code (it looks like: `data-share-badge-id="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`)

## Step 2: Update the Portfolio

Open `index.html` and find the Credly badges section (around line 250):

```html
<div class="credly-badges">
    <div data-iframe-width="150" data-iframe-height="270" 
         data-share-badge-id="your-badge-id-1" 
         data-share-badge-host="https://www.credly.com"></div>
    <div data-iframe-width="150" data-iframe-height="270" 
         data-share-badge-id="your-badge-id-2" 
         data-share-badge-host="https://www.credly.com"></div>
    <div data-iframe-width="150" data-iframe-height="270" 
         data-share-badge-id="your-badge-id-3" 
         data-share-badge-host="https://www.credly.com"></div>
</div>
```

Replace `your-badge-id-1`, `your-badge-id-2`, etc. with your actual badge IDs.

## Step 3: Add More Badges

To display more badges, simply copy and paste the div structure:

```html
<div data-iframe-width="150" data-iframe-height="270" 
     data-share-badge-id="YOUR_ACTUAL_BADGE_ID" 
     data-share-badge-host="https://www.credly.com"></div>
```

## Recommended Badges to Display

Based on your certifications, prioritize these:
1. AWS Certified AI Practitioner (2025)
2. AWS Certified DevOps Engineer - Professional (2024)
3. AWS Certified Solutions Architect - Professional (2024)
4. AWS Certified Developer - Associate
5. AWS Certified Solutions Architect - Associate

## Example Badge IDs

Your badge URLs will look like:
- `https://www.credly.com/badges/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

The part after `/badges/` is your badge ID.

## Customization

You can adjust the badge size by changing:
- `data-iframe-width` (default: 150)
- `data-iframe-height` (default: 270)

For larger badges, use:
- Width: 200
- Height: 360
