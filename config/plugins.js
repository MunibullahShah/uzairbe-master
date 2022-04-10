module.exports = ({ env }) => ({
  upload: {
    breakpoints:{
      thumbnail:64
    },
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
      region: 'ap-south-1',
      params: {
        Bucket: 'helperhubimages',
      },
    },
  },
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'uzair.soft.engg@gmail.com',
      defaultReplyTo: 'uzair.soft.engg@gmail.com',
    },
  },
});